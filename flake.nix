{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable/";
    devenv.url = "github:cachix/devenv";
  };

  outputs = inputs @ {
    nixpkgs,
    flake-parts,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = nixpkgs.lib.systems.flakeExposed;
      imports = [inputs.devenv.flakeModule];
      perSystem = {
        pkgs,
        lib,
        ...
      }: let
        app = pkgs.stdenv.mkDerivation (finalAttrs: {
          pname = "redazione-ui";
          src = lib.cleanSource ./.;
          version = "0.0.0";

          nativeBuildInputs = [
            pkgs.nodejs
            pkgs.pnpm_9.configHook
          ];

          pnpmDeps = pkgs.pnpm_9.fetchDeps {
            inherit (finalAttrs) pname version src;
            hash = "sha256-+yRXJcbovabscl04JXvpTkrZG8mVG2FvTWiK2Ic1Jzc=";
          };

          buildPhase = ''
            runHook preBuild
            pnpm build
            runHook postBuild
          '';

          installPhase = ''
            runHook preInstall
            cp -r dist/ $out
            runHook postInstall
          '';
        });
      in {
        packages.default = app;
        devenv.shells.default = {
          containers = lib.mkForce {};
          packages = [];
        };
      };
    };
}
