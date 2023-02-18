        class Apple {
            constructor() {
                this.weight = 10;
            }

            getWeight() {
                return this.weight;
            }

            decrease() {
                this.weight = this.weight - 1;
            }

            isEmpty() {
                return this.weight == 0;
            }
        }

        class Human {
            constructor() {

            }

            setName(name) {
                this.name = name;
            }

            getName() {
                return this.name;
            }

            setGender(genderValue) {
                //genderValue: true -> male, false --> female
                this.gender = genderValue;
            }

            isMale() {
                return this.gender;
            }

            setWeight(w) {
                this.weight = w;
            }

            getWeight() {
                return this.weight;
            }

            say(something) {
                console.log(something);
            }

            eat(apple) { //apple ở đây khác Apple lớp ở trên
                if(!apple.isEmpty()) {
                //if(apple.getWeight() > 0)
                   // this.weight = this.weight + 1;
                    this.setWeight(this.weight + 1);
                    apple.decrease();
            }
            }

            checkApple(apple) {
                return apple.getWeight() > 0;
            }
        }