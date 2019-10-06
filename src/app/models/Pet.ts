export class Pet {
  constructor(
    public petId: string,
    public petName: string,
    public petType: string,
    public location: string,
    public searchDistance: string,
    public petStatus: any = [
      { id: Number, name: 'lostCheck', value: 'lostCheck', selected: true },
      { id: Number, name: 'foundStrayCheck', value: 'foundStrayCheck' },
      { id: Number, name: 'reunitedCheck', value: 'reunitedCheck' },
    ],
    public petGender: string,
    public addedDate: Date,
    public sortBy: string,
    public imageUrl: string,
    public petDescription: string
  ) { }
}
