default:
	@echo "Available commands: help, run, and clean application"

clean:
	watchman watch-del-all
	rm -rf ${TMPDIR:-/tmp}/metro-*
	yarn cache clean
	rm -rf ios/build
	rm -rf ios/Pods
	rm -rf ~/Library/Developer/Xcode/DerivedData
	cd android && ./gradlew clean
	rm -rf android/build
	rm -rf android/app/build
	rm -rf node_modules

	# use a backup
	yarn install
	cd ios && pod install

zip:
	git archive --format=zip HEAD -o noto.zip
	unzip noto.zip -d noto
	cp -r .git noto/.git
	zip -r Thanet_Thobood.zip noto
	rm -rf ./noto
	rm -f noto.zip
