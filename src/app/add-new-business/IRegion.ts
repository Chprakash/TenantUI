import { ICountry } from './country';
import { IState } from './state';
import { ICity } from './city';
import { IArea } from './area';
import { IZip } from './zip';

export interface IRegion {
    countries: ICountry[];
    states: IState[];
    cities: ICity[];
    areas: IArea[];
    zips: IZip[];
}
