if ! which circleci &>/dev/null; then
    wget -c https://github.com/CircleCI-Public/circleci-cli/releases/download/v0.1.5879/circleci-cli_0.1.5879_linux_amd64.tar.gz -O - | tar -xz
    sudo mv circleci-cli_0.1.5879_linux_amd64/circleci /usr/bin/
    echo "CircleCi executable moved to /usr/bin/circleci, to uninstall just delete the file"
    rm -rf circleci-cli_0.1.5879_linux_amd64
else
    echo "CircleCi Local is already installed at $(which circleci). Delete the file and run this script again to re-install"
fi