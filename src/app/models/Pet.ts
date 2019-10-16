export class Pet {
  constructor(
    public id: string,
    public petName: string,
    public petType: string,
    public location: string,
    public searchDistance: string,
    public petStatus: any = [
      { id: '', name: 'Lost', value: 'lostCheck', checked: true },
      { id: '', name: 'Found', value: 'foundStrayCheck', checked: false },
      { id: '', name: 'Reunited', value: 'reunitedCheck', checked: false },
    ],
    public petGender: string,
    public addedDate: Date,
    public sortBy: string,
    public imageUrl: string,
    public petDescription: string
  ) { }
}
