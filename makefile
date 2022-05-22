# Variables
namespace = website

all: build-supervillain push-supervillain deploy-supervillain
update: build-supervillain push-supervillain restart-supervillain


# Build
build-image:
	docker build -f build/dockerfile -t ghcr.io/foodyfood/supervillain:latest ./build/


# Run
run:
	cd ./build/; npm run dev;
install:
	cd ./build/; npm install;

install-win:
	bash.exe -c -i "pushd ./build/; npm install; popd"
run-win:
	bash.exe -c -i "pushd ./build/; npm run dev; popd"

run-image:
	docker run -it --rm -p 3000:3000 ghcr.io/foodyfood/supervillain:latest 


# Push
push:
	docker push ghcr.io/foodyfood/supervillain:latest


# Deploy
deploy-chart:
	-kubectl create namespace $(namespace)
	helm upgrade supervillain ./deploy/ -n $(namespace) --create-namespace


# Restart
restart:
	kubectl rollout restart deployment/supervillain --namespace $(namespace)


# Uninstall
uninstall:
	helm uninstall supervillain -n $(namespace)