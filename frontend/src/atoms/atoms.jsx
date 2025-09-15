import {atom} from "recoil";

export const nameState = atom({
    key:"name",
    default:""
})

export const emailState = atom({
    key:"email",
    default:""
})

export const passwordState = atom({
    key:"password",
    default:""
})

export const roleState = atom({
    key:"role",
    default:""
})

export const foodNameState = atom({
    key:"food",
    default:""
})

export const foodPriceState = atom({
    key:"foodPrice",
    default:0
})

export const foodCategoryState = atom({
    key:"foodCategory",
    default:""
})

export const foodDescriptionState = atom({
    key:"foodDescription",
    default:""
})

export const foodExpiryState = atom({
    key:"foodExpiry",
    default:""
})

export const foodLocationState = atom({
    key:"foodLocation",
    default:""
})

export const foodQuantityState = atom({
    key:"foodQuantity",
    default:0
})

export const foodProviderState = atom({
    key:"foodProvider",
    default:""
})