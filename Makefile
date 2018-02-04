all: build

build: test-lib
	npm run -s build

test-lib:
	npm test -s
