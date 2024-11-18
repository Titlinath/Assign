from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def dashboard():
    if request.method == 'POST':
        name = request.form.get('name')
        age = request.form.get('age')
        file = request.files.get('file')

        return f"""
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>File Name:</strong> {file.filename}</p>
        <a href="/">Go Back</a>
        """
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
