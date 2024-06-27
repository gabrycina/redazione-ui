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
      imports = [inputs.devenv.flakeModule inputs.flake-parts.flakeModules.easyOverlay];
      perSystem = {
        pkgs,
        lib,
        config,
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
            hash = "sha256-ZjGmbGNd8jnEQglMg5Q98vj7pHyLaytdCcnvjvVg3w8=";
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
        overlayAttrs = {
          inherit (config.packages) redazione-ui;
        };
        packages.default = app;
        packages.redazione-ui = app;
        devenv.shells.default = {
          containers = lib.mkForce {};
          packages = [];
        };
      };
    };
}
