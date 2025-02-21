from flask import Flask, render_template

app = Flask(__name__)

# ...existing code...

@app.route('/forum')
def forum():
    return render_template('forum.html')

# ...existing code...

if __name__ == '__main__':
    app.run(debug=True)
