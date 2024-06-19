import {tuple} from "./type/tuple.js";

export const StatusEnum = tuple('ACTIVE', 'INACTIVE', 'DELETED');
export type Status = (typeof StatusEnum)[number];