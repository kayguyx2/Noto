default:
	@echo "Available commands: help, run, and clean application"

clean:
	watchman watch-del-all
	yarn cache clean
	rm -rf ios/build
	rm -rf ~/Library/Developer/Xcode/DerivedData
	rm -rf android/build
	rm -rf node_modules
	yarn install