test:
	npx jest --config jest.config.js

test-watch:
	npx jest --config jest.config.js --watch

snapshot:
	npx jest --config jest.config.js -u

dev:
	npx ts-node-dev --respawn --transpileOnly src/index.ts

dev-typed:
	STRICT_TYPING=true npx ts-node-dev --n src/index.ts

mock:
	npx json-server --watch src/data/db.json --port 5555

serve:
	node dist/index.js

publish:
	npx tsc --outDir dist || true

json:
	npx json-server --watch src/data/db.json --port 5555
