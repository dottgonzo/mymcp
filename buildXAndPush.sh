#!/bin/bash


VERSION=$(cat package.json | jq -r '.version')


GITHUB_REGISTRY_URI=$(cat package.json | jq -r '.repository.url' | sed 's/git@github.com://g'| sed 's/\.git//g')



REGISTRY_URI="$GITHUB_REGISTRY_URI"


echo building $REGISTRY_URI with version: \"master\" and \"$VERSION\"



docker buildx build --platform linux/amd64,linux/arm64 -t $REGISTRY_URI:master -t $REGISTRY_URI:$VERSION --push .
