export class Pet {
  constructor(
    public petId?: string,
    public petName?: string,
    public petType?: string,
    public location?: string,
    public searchDistance?: string,
    public lostCheck?: boolean,
    public foundStrayCheck?: boolean,
    public reunitedCheck?: boolean,
    public petGender?: string,
    public dateRange?: string,
    public sortBy?: string,
    public imageUrl?: string,
    public petDescription?: string
  ) { }
}
