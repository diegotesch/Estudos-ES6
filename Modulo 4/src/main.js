class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    //registra eventos
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a seua ideia do papel e de vida a sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/unform'
        });

        console.log(this.repositories);
    }
}

new App();