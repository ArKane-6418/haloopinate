<div align="center">    

# haloopinate

</div>


<p align="center">
  <img src="samples/mona_lisa.gif"/>
  <img src="samples/treasure_hacks_logo.gif"/>
</p>

Haloopinate allows users to leverage the power of deep learning to hallucinate an infinitely-looping psychedelic GIF based on an input image.
It can be accessed through a user-friendly GUI or through a command-line interface, where more hyperparameters options are exposed.
Haloopinate was submitted as an entry for Treasure Hacks 3.5 (Devpost TBD).

______________________________________________________________________

## Inspiration

Haloopinate was inspired by the recent and significant advances in deep learning for the visual arts, with models such as Midjourney. These models can contain billions of parameters, which would be too unwieldy to adapt for a one-day hackathon. In our brainstorming session, we recalled the older yet more tractable technique of DeepDreaming [1], which can produce wild psychedelic images that are both mesmerizing and disorienting. We thought that if we could continuously stitch together these images that it would make for a cool GIF, which ultimately led to the "inception" of this project!

## Usage

### Dependencies

Install all necessary dependencies with:

```commandline
pip install -r requirements.txt
```

The command-line interface (CLI) relies only on `torch`, `torchvision`, and `imageio`. 

### Command-Line Interface

Haloopinate comes with a CLI that exposes more hyperparameter options: 

```commandline
python -m haloopinate.run --help
```

## Frontend

To get the frontend up and running,

1. Go into the frontend folder using:
```commandline
cd frontend
```
2. Install all the required modules with:
```commandline
npm install
```
3. Lastly, start the app with:
```commandline
npm start
```

## Backend

To get the backend running, 

1. Go into the frontend folder using:
```commandline
cd frontend
```
2. Start the backend with:
```commandline
npm run start-backend
```

## References
- [1] The original DeepDream [blog post](https://ai.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html)
- [2] Aleksa Gordić’s DeepDream [implementation](https://github.com/gordicaleksa/pytorch-deepdream/tree/master)  
