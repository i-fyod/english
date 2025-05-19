import { useState } from "react";
import { questions } from "./data/questions";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.questionRu.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <div
        style={{
          position: "sticky",
          top: "0",
          left: "0",
        }}
      >
        <h3>English Questions & Answers</h3>

        <div className="search-container" style={{ width: "80%" }}>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="questions-container">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <div key={q.id} className="question-card">
              <h3>{q.theme}</h3>
              <div className="question-block">
                <p className="question">
                  <strong style={{ color: "white" }}>Question:</strong>{" "}
                  {q.question}
                </p>
                <p>
                  <strong>Вопрос:</strong> {q.questionRu}
                </p>
              </div>
              <div className="answer-block">
                <p>
                  <strong>Short Answer:</strong> {q.shortAnswer}
                </p>
                <p>
                  <strong>Краткий ответ:</strong> {q.shortAnswerRu}
                </p>
              </div>
              <div className="full-answer-block">
                <p>
                  <strong>Full Answer:</strong> {q.fullAnswer}
                </p>
                <p>
                  <strong>Полный ответ:</strong> {q.fullAnswerRu}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No questions found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
}

export default App;
