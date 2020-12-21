# Status

A simple status for discord.

## Installation

- Run `npm install` to install dependencies.
- Rename `configuration.toml.example` to `configuration.toml`.
- Change values of `token`, `guild` and `channel`.


## Usage

Status work with Categories, Services and Addresses, you can modify like this:

```toml
[status]
    [status.first] # status.first is an identifier
        name = "Première catégorie" # status.first.name is the name of the Category
        servers = [
            ["Google", "google.fr", "google.com", "google.be"], # The first element is the name of the Service, the following are its addresses (The ping is determinated by last address)
            ["Facebook", "facebook.com", "179.60.192.36"],
            ["Discord", "162.159.135.232"]
        ]
```

Run `npm start` to start the bot.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)