# What is this?
Docker proxy based on TOXY (https://github.com/h2non/toxy)

# How to use it 
1. Clone this repository

2. Build it
docker  build  -t toxy .

3. Edit toxy.js (check params at https://github.com/h2non/toxy)

4. Run it
docker run -d -p 3000:3000 -p 9000:9000 -v $(pwd)/toxy.js:/toxy.js --name proxy toxy

5. Access it
curl http://localhost:3000
 

