cd my-app
npm run build
sudo cp -r build/* /Library/tomcat/webapps/react
cd -
cd jersey-example
gradle build
sudo cp build/libs/jersey-example.war /Library/tomcat/webapps
cd -
sudo sh /Library/tomcat/bin/startup.sh

