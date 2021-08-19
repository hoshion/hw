export interface Database {
    INSERT(city: string): void;
    INCREASE_BY_ONE(city: string): void;
    EXISTS(city: string): boolean;
    SAVE_TABLE(): void;
    SELECT(city: string): void;
}