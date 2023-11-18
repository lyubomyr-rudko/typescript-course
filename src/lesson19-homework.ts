interface Crossbow{
    shoot:()=>void
}

interface MagicStaff{
    castSpell:()=>void
}

interface Hammer{
    smash:()=>void
}

interface WeaponsFactory{
    createMagicStaff():MagicStaff
    createHammer():Hammer
    createCrossbow():Crossbow
}

class FireWeaponsFactory implements WeaponsFactory {
    createMagicStaff(): MagicStaff {
        return {
            castSpell:()=>console.log("Casting spell with FIRE staff")
        }
    }

    createHammer():Hammer{
        return {
            smash:()=>console.log("Smashing with FIRE hammer")
        }
    }
    createCrossbow():Crossbow{
        return {
            shoot:()=>console.log("Shooting with FIRE crossbow")
        }
    }
}

class ThunderWeaponsFactory implements WeaponsFactory {
    createMagicStaff(): MagicStaff {
        return {
            castSpell:()=>console.log("Casting spell with THUNDER staff")
        }
    }

    createHammer():Hammer{
        return {
            smash:()=>console.log("Smashing with THUNDER hammer")
        }
    }
    createCrossbow():Crossbow{
        return {
            shoot:()=>console.log("Shooting with THUNDER crossbow")
        }
    }
}

class FrostWeaponsFactory implements WeaponsFactory {
    createMagicStaff(): MagicStaff {
        return {
            castSpell:()=>console.log("Casting spell with FROST staff")
        }
    }

    createHammer():Hammer{
        return {
            smash:()=>console.log("Smashing with FROST hammer")
        }
    }
    createCrossbow():Crossbow{
        return {
            shoot:()=>console.log("Shooting with FROST crossbow")
        }
    }
}

const thunderWeaponsFactory = new ThunderWeaponsFactory()
const myHammer:Hammer = thunderWeaponsFactory.createHammer()

const fireWeaponsFactory = new FireWeaponsFactory()
const myStaff:MagicStaff = fireWeaponsFactory.createMagicStaff()

const frostWeaponsFactory = new FrostWeaponsFactory()
const myCrossbow:Crossbow = frostWeaponsFactory.createCrossbow()

myCrossbow.shoot()
myStaff.castSpell()
myHammer.smash()