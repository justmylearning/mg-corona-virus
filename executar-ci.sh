FIREBASE_TOKEN=$(<firebase-token-ci.txt) # token gerado a partir de -> firebase login:ci

circleci config validate
circleci config process .circleci/config.yml > process.yml
circleci build -c process.yml --env FIREBASE_TOKEN=${FIREBASE_TOKEN} CI=false
#circleci local execute -c process.yml --job build