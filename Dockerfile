FROM node:0.10.35-slim

WORKDIR /jitter

ENV PATH $PATH:/jitter/node_modules/bower/bin/
ENV PATH $PATH:/jitter/node_modules/grunt-cli/bin/

CMD ["bash", "-c", "npm install --verbose && bower install --allow-root"]