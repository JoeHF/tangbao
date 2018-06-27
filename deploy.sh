cd my-app
npm run build
sudo cp -r build /Library/tomcat/webapps/
cd -
cd jersey-example
gradle build
sudo cp build/libs/jersey-example.war /Library/tomcat/webapps
cd -

