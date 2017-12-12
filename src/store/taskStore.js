import { observable, action } from "mobx";

import { URL } from "../config";

export default class TaskStore {
    @observable tasks = [];
    @observable selectTask;

    constructor() {

    }
    
    @action fetch() {
        return fetch(`${URL}/purchase/v1/orders`)
            .then((e) => {
                console.log(e)
            })
    }
}
