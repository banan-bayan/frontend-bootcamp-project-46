diff:
		node bin/gendiff.js -h
install:
		npm ci
lint:
		npx eslint .
test:
		npx jest