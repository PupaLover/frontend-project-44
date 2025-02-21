# Makefile для JavaScript/Node.js проекта

# Переменные
PACKAGE_MANAGER = npm

# Цель по умолчанию
.PHONY: all
all: install

# Установка зависимостей через npm ci
.PHONY: install
install:
	$(PACKAGE_MANAGER) ci

# Очистка папки node_modules
.PHONY: clean
clean:
	rm -rf node_modules

# Запуск игры
.PHONY: brain-games
brain-games:
	node bin/brain-games.js


.PHONY: publish
publish:
	npm publish --dry-run

# Запуск eslint
.PHONY: eslint
eslint:
	npx eslint

# Запуск Второй игры
.PHONY: brain-even
brain-even:
	node bin/brain-even.js

# Запуск Третьей игры
.PHONY: brain-calc
brain-calc:
	node bin/brain-calc.js

.PHONY: brain-gcd
brain-gcd:
	node bin/brain-gcd.js

.PHONY: brain-progression
brain-progression:
	node bin/brain-progression.js

.PHONY: brain-prime
brain-prime:
	node bin/brain-prime.js
