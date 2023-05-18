diff:
		node bin/gendiff.js -h
install:
		npm ci
lint:
		npx eslint .
test:
		npx jest
test-coverage:
		npx jest --coverage