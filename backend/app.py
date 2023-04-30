from flask import Flask, request
from werkzeug.utils import secure_filename
import os
from haloopinate import haloopinate

app = Flask(__name__)
app.config["UPLOAD"] = os.path.join('static', 'uploads')

# @app.route('/')
# def index():
#     return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate_deep_dream():
        # if request.form["submit"] == "Submit":
        #     # Get the uploaded image
        #     file = request.files["image"]
        #     filename = secure_filename(file.filename)

        #     # Save image locally and get the path
        #     file.save(os.path.join(app.config['UPLOAD'], filename))
            
        #     img_path = os.path.join(app.config['UPLOAD'], filename)
        #     return render_template("index.html", img=img_path)
        
        # elif request.form['submit'] == 'Generate':
        # Pass image to model code to return deep dream version
    file = request.files["image"]
    filename = secure_filename(file.filename)

     # Save image locally and get the path
    file.save(os.path.join(app.config['UPLOAD'], filename))
    
    img_path = os.path.join(app.config['UPLOAD'], "mona_lisa.jpeg")
    export_path = os.path.join(app.config['UPLOAD'], "mona_lisa.gif")
    haloopinate(image_path=img_path, export_path=export_path, duration=6, debug=True)
    return    
        
# @app.route("/generate", methods=["POST"])
# def generate_deep_dream():
#     print(request.method)
#     if request.method == "POST":
        
        

if __name__ == "__main__":
    app.run(debug=True)