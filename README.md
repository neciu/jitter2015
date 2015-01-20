### BUILD: 
`docker build -t jitter .`

### DOWNLOAD ALL DEPENDENCIES: 
```docker rm jitter; docker run -it -v `pwd`:/jitter --name jitter jitter```

### RUN: 
```docker rm jitter; docker run -it -v `pwd`:/jitter --name jitter jitter /bin/bash```

### BUILD (inside container): 
`grunt`

App will be build and put in `out` directory.

### BUILD DISTRIBUTION: 
`grunt distribution`
