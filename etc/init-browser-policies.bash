#!/usr/bin/env bash
# This script will create the direcories or symlinks that browsers look for
# their policies. The user is trusted to setup those manually.
set -x

# Require root or exit
if [ "$(id -u)" != "0" ]; then
	echo "This script requires root for managing /etc/" 1>&2
	exit 1
fi

# Firefox and LibreWolf (caution! https://codeberg.org/librewolf/issues/issues/1767)
mkdir -vp /etc/firefox/policies
chmod -v a+rx /etc/firefox/
chmod -v a+rx /etc/firefox/policies/
touch /etc/firefox/policies/policies.json
chmod -v a+r /etc/firefox/policies/policies.json
printf "WARNING! LibreWolf default profile may be masked!\nhttps://codeberg.org/librewolf/issues/issues/1767\n"

# Note to self on ln:
# -s is obviously symbolic link.
# -n will not follow symlink if it's a directory stopping the symlinks.
#    pointing to the directory containing them.
# -v is obviously verbose.
# -f is obviously force so there won't be error message about it already
#    existing.

# Firefox ESR
ln -fnsv /etc/firefox /etc/firefox-esr

# Chromium
mkdir -vp /etc/opt/chromium/policies/{managed,recommended}
chmod -v a+rx /etc/opt/chromium/policies/
chmod -v a+rx /etc/opt/chromium/policies/{managed,recommended}/

# Brave
mkdir -p /etc/brave
ln -fnsv /etc/opt/chromium/policies /etc/brave/policies

# Vivaldi
mkdir -p /etc/chromium
ln -fnsv /etc/opt/chromium/policies /etc/chromium/policies

# Google Chrome
mkdir -p /etc/opt/chrome
ln -fnsv /etc/opt/chromium/policies /etc/opt/chrome/policies

# Microsoft Edge
# I used to have a separate policy for it so remember to remove this manually
# if it exists!
mkdir -p /etc/opt/edge
ln -fnsv /etc/opt/chromium/policies /etc/opt/edge/policies

set +x
