# Notes API

Basic notes API

## Overview

This repository provides a simple Notes API built with JavaScript. It allows users to create, read, update, and delete notes.

## Features

- Create new notes
- Retrieve all notes or a specific note
- Update existing notes
- Delete notes

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Keshav76315/notes-api.git
    cd notes-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the API

Start the server:

```bash
npm start
```

## API Endpoints

| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| GET    | `/notes`            | Get all notes                     |
| GET    | `/notes/:id`        | Get note by ID                    |
| POST   | `/notes`            | Create a new note                 |
| PUT    | `/notes/:id`        | Update note by ID                 |
| DELETE | `/notes/:id`        | Delete note by ID                 |
