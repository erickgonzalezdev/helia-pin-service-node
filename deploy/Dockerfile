# Dockerized node.
#

#IMAGE BUILD COMMANDS
FROM ubuntu:22.04

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget

#Install Node and NPM
RUN sudo apt-get install -y ca-certificates curl gnupg
RUN sudo mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
RUN sudo apt-get update
RUN sudo apt-get install -y nodejs build-essential

#Set the working directory to be the home directory
WORKDIR /home/ipfsnode

RUN git clone https://github.com/erickgonzalezdev/helia-pin-service-node.git

WORKDIR /home/ipfsnode/helia-pin-service-node

# Install dependencies
RUN npm install

CMD ["./start.sh"]

