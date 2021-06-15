class Meal {
    constructor(id, categoryId, name, imgUrl,minute,serving,isBookmark,ingredient) {
        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.imgUrl = imgUrl;
        this.minute = minute;
        this.serving = serving;
        this.isBookmark = isBookmark;
        this.ingredient = ingredient;
    }

}

export default Meal;