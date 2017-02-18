# silver-invention-service
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

## Tech Stack
- pm2
  - pm2 start pm2.json
  - pm2 status
  - pm2 stop all
  - pm2 delete all
  - pm2 flush
- Express, REST API endpoints
- Winston for logging
- ES7, Async, Await
- Babel
- Docker
  - Run gulp first
  - docker build -t "silver-invention-service-es" .
  - docker run -p 5001:5001 -d -t "silver-invention-service-es"
  - docker stop $(docker ps -a -q)
  - docker rm $(docker ps -a -q)
  - docker rmi -f $(docker images -q)
- Artilerry
  - artillery run artillery.yml
- Integration tests with Jasmine, Istanbul, remap-istanbul
  - $ npm run cover-start
  - $ npm test
  - $ npm stop
  - $ npm run remap-cover-ts

## Docker (Optional)
### Build Instances
- Run gulp first
- docker build -t "silver-invention-service-es" .
- docker build -t "silver-invention-service-es/neo4j" docker/neo4j/
- docker build -t "silver-invention-service-es/elasticsearch" docker/elasticsearch/
- docker build -t "silver-invention-service-es/cassandra" docker/cassandra/

### Run Instances
- docker run -p 8081:8081 -d -t "silver-invention-service-es" 
- docker run -p 7474:7474 -p 7373:7373 -p 7687:7687 -d -t "silver-invention-service-es/neo4j"
- docker run -p 7000:7000 -p 7001:7001 -p 7199:7199 -p 9042:9042 -p 9160:9160 -d -t "silver-invention-service-es/cassandra"
- docker run -p 9200:9200 -p 9300:9300 -d -t -e ES_JAVA_OPTS='-Xms1g -Xmx1g' silver-invention-service-es/elasticsearch -E bootstrap.ignore_system_bootstrap_checks=true

### Stop all containers
- docker stop $(docker ps -a -q)

### Delete all containers
- docker rm $(docker ps -a -q)

### Delete all images
- docker rmi -f $(docker images -q)  

## Wish List / To do

- External Configs
- deploy to heroku
- Cloudformation
- Kubernete
- Terraform
- Cassandra / cloud provider
- Neo4J / cloud provider
- deploy to google cloud
- Swagger
- TS Dependency Injection
- Observables
- travisci

## Notes
- http://babeljs.io/docs/plugins/transform-async-to-module-method/
- http://stackoverflow.com/questions/33641593/babel-6-async-await-unexpected-token
- http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await?answertab=active#tab-top

