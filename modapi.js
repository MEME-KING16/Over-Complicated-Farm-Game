class Advancement {
    constructor(name,req) {
        Advancement.customAdvancements.push({name,req})
        Achievements[name] = 0
    }
    static customAdvancements = []
    static checkAll() {
        for (let index = 0; index < Advancement.customAdvancements.length; index++) {
            console.log(Achievements[Advancement.customAdvancements[index].name])
            if(eval(Advancement.customAdvancements[index].req) && Achievements[Advancement.customAdvancements[index].name] == 0)
                Grant(Advancement.customAdvancements[index].name)
        }

    }
}


class CropType {
    constructor(name,svgIconForCrop,svgIconForInfectedCrop,svgIconForGrowingCrop,svgIconForInfectedGrowingCrop,cropBuy,cropSell,seedBuy,seedSell) {
        crops.push(name)
        ico[name] = svgIconForCrop
        ico["infected"+name] = svgIconForInfectedCrop
        ico["growing"+name] = svgIconForGrowingCrop
        ico["infectedgrowing"+name] = svgIconForInfectedGrowingCrop
        game[name] = 0
        game[name+"seeds"] = 0
        let stat = new Stat("lifetime"+name,"Lifetime "+capitalizeFirstLetter(name))
        game.stats[stat.id] = stat
        prices[name] = {buy:cropBuy,sell:cropSell}
        prices[name+"seeds"] = {buy:seedBuy,sell:seedSell}
        items.push(new Item(name))
        items.push(new Item(name+"seeds",name+" seeds"))
        document.getElementById("allitems").innerHTML += `<button onclick="storetransaction('${name}')">${capitalizeFirstLetter(name)}</button><button onclick="storetransaction('${name}seeds')">${capitalizeFirstLetter(name)} Seeds</button>`
    }
}

/**
 * @deprecated The class Croptype is deprecated and will be removed in a future update.
 * Use CropType instead.
 */
const Croptype = CropType;


class Item {
    constructor(id,displayName) {
        this.id = id
        this.displayName = displayName
    }
}

class Stat {
    constructor(id,displayName) {
        this.id = id
        this.displayName = displayName
        this.amount = 0
    }
}
