export class User {
  id: string; // id user
  email: string; // user email
  name: string; // user name
  avatar: string; // picture url of user profil
  promodoroDuration: number; // duration of promodoros

  contructor(options: {
    id?: string,
    email?: string,
    name?: string,
    avatar?: string,
    promodoroDuration?: number,
  } = {}) {
    this.id = options.id || null;
    this.email = options.email || '';
    this.name = options.name || '';
    this.avatar = options.avatar || '';
    this.promodoroDuration = options.promodoroDuration || 1500;
  }

  get roles(): Array<'USER'|'EMPLOYEE'> {
    return this.email.endsWith('google.com') ? ['USER', 'EMPLOYEE'] : ['USER'];
  }
}
