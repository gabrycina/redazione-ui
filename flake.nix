{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable/";
    devenv.url = "github:cachix/devenv";
    deploy-rs.url = "github:serokell/deploy-rs";
  };

  outputs = inputs @ {
    self,
    nixpkgs,
    flake-parts,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = nixpkgs.lib.systems.flakeExposed;
      imports = [inputs.devenv.flakeModule];
      perSystem = {
        inputs',
        pkgs,
        lib,
        ...
      }: {
        packages.default = pkgs.stdenv.mkDerivation (finalAttrs: {
          pname = "redazione-ui";
          src = ./.;
          version = "0.0.0";
          sourceRoot = finalAttrs.src;

          nativeBuildInputs = [
            pkgs.nodejs
            pkgs.pnpm_9.configHook
          ];

          pnpmDeps = pkgs.pnpm_9.fetchDeps {
            inherit (finalAttrs) pname version src sourceRoot;
            hash = "sha256-awQgOLkb46v2aWfw6yv+zGPoOnczalkzg02tBgMTyMY=";
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
        devenv.shells.default = {
          containers = lib.mkForce {};
          packages = [
            inputs'.agenix.packages.default
            pkgs.deploy-rs
          ];
        };
      };
    };
}
