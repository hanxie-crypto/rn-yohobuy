import * as types from './actionTypes';
import Util from '../util/util';
import Server from '../config/server';


export function getCover() {

    Util.post(Server.findCover, null, function(data) {
        return {
            type: types.GETCOVER,
            data: data
        };
    })

}