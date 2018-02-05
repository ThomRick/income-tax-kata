all: build

build: test-lib
	npm run -s build

test-lib:
	npm test -s

clean:
	rm -rf .nyc_output coverage lib node_modules
