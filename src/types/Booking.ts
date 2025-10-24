
export namespace Booking {
  export type Status = "pending" | "confirmed" | "cancelled";

  export interface ReservedDate {
    value: string;
    inclusive: boolean;
  }

  export interface IBook {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    nationalId: string;
  }

  export interface DataValues {
    id: number;
    houseId: number;
    reservedDates: string[];
    traveler_details: IBook[];
    user_id: number;
    status: Status;
    updatedAt: number;
    createdAt: number;
    sharedEmail: string | null;
    sharedMobile: string | null;
  }

  export interface Entity {
    isNewRecord: boolean;
    previousDataValues?: unknown;
    _options?: Record<string, unknown>;
    _changed?: unknown;
    _schema?: string;
    _schemaDelimiter?: string;
  }

  export interface CreateResponse extends Entity {
    dataValues: DataValues;
  }
}
