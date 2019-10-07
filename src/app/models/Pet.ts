export class Pet {
  constructor(
    public petId: string,
    public petName: string,
    public petType: string,
    public location: string,
    public searchDistance: string,
    public petStatus: any = [
      { id: '', name: 'lostCheck', value: 'lostCheck', checked: true },
      { id: '', name: 'foundStrayCheck', value: 'foundStrayCheck', checked: false },
      { id: '', name: 'reunitedCheck', value: 'reunitedCheck', checked: false },
    ],
    public petGender: string,
    public addedDate: Date,
    public sortBy: string,
    public imageUrl: string,
    public petDescription: string
  ) { }
}
