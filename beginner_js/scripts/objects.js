function Housekeeper(name, workHistoryYears, fears) {
    this.name = name
    this.workHistoryYears = workHistoryYears
    this.fears = fears
    this.cleaningWindow = function(homePlace) {
        console.log(this.name + " will clean clean clean that window and then go to the " + homePlace);
    }
};

var housekeepers = [] 

housekeepers.push(new Housekeeper("sue", 50, ["spiders", "kids"]));
housekeepers.push(new Housekeeper("twoo", 50,["spiders", "kids"]));
