# Variables
namespace = website

all: build-supervillain push-supervillain deploy-supervillain
update: build-supervillain push-supervillain restart-supervillain


# Build related
build-supervillain:
	docker build -f build/dockerfile -t ghcr.io/foodyfood/supervillain:latest ./build/

# Push related
push-supervillain:
	docker push ghcr.io/foodyfood/supervillain:latest

# Deploy related
deploy-supervillain:
	-kubectl create namespace $(namespace)
	helm install supervillain ./deploy/ -n $(namespace) --create-namespace

# Restart related
restart-supervillain:
	kubectl rollout restart deployment/supervillain --namespace $(namespace)

# Uninstall related
uninstall-supervillain:
	helm uninstall supervillain -n $(namespace)