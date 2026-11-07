"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildRoadmap,
  getAnswerSummary,
  questions,
} from "@/data/roadmap";

const EMAIL = "hassanazmat079@gmail.com";

function buildMailto(answers, plan) {
  const summary = getAnswerSummary(answers)
    .map((item) => `${item.label}: ${item.answer}`)
    .join("\n");

  const phases = plan.phases
    .map(
      (phase) =>
        `${phase.window} — ${phase.title}\n${phase.items
          .map((item) => `• ${item}`)
          .join("\n")}`
    )
    .join("\n\n");

  const body = [
    "Growth roadmap request",
    "",
    summary,
    "",
    `Recommended path: ${plan.tag}`,
    plan.title,
    "",
    plan.diagnosis,
    "",
    phases,
    "",
    `Monthly budget: ${plan.metrics[0].value}`,
    `90-day focus: ${plan.focus}`,
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Growth roadmap — ${plan.tag}`
  )}&body=${encodeURIComponent(body)}`;
}

export default function Roadmap() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const questionHeadingRef = useRef(null);
  const resultHeadingRef = useRef(null);
  const resultRef = useRef(null);
  const hasInteracted = useRef(false);

  const question = questions[step];
  const selected = answers[question.id];
  const plan = done ? buildRoadmap(answers) : null;
  const summary = done ? getAnswerSummary(answers) : [];
  const progress = ((step + (selected ? 1 : 0)) / questions.length) * 100;

  useEffect(() => {
    if (!hasInteracted.current) return;
    if (!done) questionHeadingRef.current?.focus({ preventScroll: true });
  }, [step, done]);

  useEffect(() => {
    if (!done) return;
    resultHeadingRef.current?.focus({ preventScroll: true });
    if (window.matchMedia("(max-width: 980px)").matches) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [done]);

  function selectAnswer(id) {
    setAnswers((current) => ({ ...current, [question.id]: id }));
  }

  function goNext() {
    if (!selected) return;
    hasInteracted.current = true;
    if (step === questions.length - 1) {
      setDone(true);
      return;
    }
    setStep((current) => current + 1);
  }

  function goBack() {
    hasInteracted.current = true;
    setStep((current) => Math.max(0, current - 1));
  }

  function editAnswers() {
    hasInteracted.current = true;
    setDone(false);
    setStep(0);
  }

  function startOver() {
    hasInteracted.current = true;
    setDone(false);
    setStep(0);
    setAnswers({});
  }

  return (
    <section className="section roadmap" id="roadmap">
      <div className="roadmap-aura" aria-hidden="true"></div>
      <div className="shell">
        <header className="section-head">
          <div className="kicker reveal">
            <span className="kicker-num">04</span>
            <span className="kicker-label">Client roadmap</span>
            <span className="kicker-tail" aria-hidden="true"></span>
          </div>
          <div className="section-head-row">
            <h2 className="section-title" data-split>
              Your next 90 days, <em>mapped.</em>
            </h2>
            <p className="section-intro reveal" style={{ "--d": "120ms" }}>
              Four questions about your business. In return: the right growth
              lever, a week-by-week plan, and the numbers to judge it by.
            </p>
          </div>
        </header>

        <div className="roadmap-grid">
          {!done ? (
            <div className="roadmap-card">
              <div className="roadmap-card-head">
                <span className="roadmap-step">
                  Question {String(step + 1).padStart(2, "0")}
                  <span> / 04</span>
                </span>
                <span className="roadmap-progress" aria-hidden="true">
                  <i style={{ width: `${progress}%` }}></i>
                </span>
              </div>

              <div className="roadmap-question" key={step}>
                <span className="roadmap-q-label">{question.label}</span>
                <h3
                  id={`roadmap-q-${question.id}`}
                  ref={questionHeadingRef}
                  tabIndex={-1}
                >
                  {question.title}
                </h3>
                <p className="roadmap-q-hint">{question.hint}</p>

                <div
                  className="roadmap-options"
                  role="group"
                  aria-labelledby={`roadmap-q-${question.id}`}
                >
                  {question.options.map((option, index) => {
                    const isSelected = selected === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        className={`roadmap-option${
                          isSelected ? " is-selected" : ""
                        }`}
                        aria-pressed={isSelected}
                        onClick={() => selectAnswer(option.id)}
                      >
                        <span className="roadmap-option-letter" aria-hidden="true">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="roadmap-option-copy">
                          <strong>{option.label}</strong>
                          <small>{option.copy}</small>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="roadmap-actions">
                <button
                  type="button"
                  className="btn btn--line"
                  onClick={goBack}
                  disabled={step === 0}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn--ember"
                  onClick={goNext}
                  disabled={!selected}
                >
                  {step === questions.length - 1
                    ? "Build my roadmap"
                    : "Continue"}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>

              <p className="roadmap-privacy">
                No email needed — answers stay in your browser.
              </p>
            </div>
          ) : (
            <div className="roadmap-card roadmap-card--done">
              <div className="roadmap-card-head">
                <span className="roadmap-step">
                  Roadmap ready<span> · 04 / 04</span>
                </span>
                <span className="roadmap-check" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-check"></use>
                  </svg>
                </span>
              </div>

              <h3 className="roadmap-done-title">Your inputs</h3>
              <dl className="roadmap-summary">
                {summary.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.answer}</dd>
                  </div>
                ))}
              </dl>

              <div className="roadmap-actions">
                <button
                  type="button"
                  className="btn btn--line"
                  onClick={editAnswers}
                >
                  Change answers
                </button>
                <button
                  type="button"
                  className="roadmap-text-btn"
                  onClick={startOver}
                >
                  Start over
                </button>
              </div>

              <p className="roadmap-privacy">
                Nothing is stored or sent until you open the email.
              </p>
            </div>
          )}

          {!done ? (
            <aside className="roadmap-result roadmap-result--empty">
              <div className="roadmap-result-head">
                <span className="roadmap-result-label">Your roadmap</span>
                <span className="chip">Preview</span>
              </div>
              <h3 className="roadmap-empty-title">
                Answer 4 questions.
                <br />
                Get a 90-day plan.
              </h3>
              <p className="roadmap-result-copy">
                No generic checklist. The plan changes with your lead flow,
                budget, and bottleneck — including whether Meta Ads are the
                right lever yet.
              </p>
              <ol className="roadmap-preview">
                <li>
                  <span>01</span>
                  <div>
                    <strong>Growth-stage diagnosis</strong>
                    <small>Where you are and what is actually holding you back.</small>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <strong>The primary lever</strong>
                    <small>Meta Ads, funnel, offer, or foundation work.</small>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <strong>A week-by-week plan</strong>
                    <small>Exactly what gets built, tested, and scaled.</small>
                  </div>
                </li>
                <li>
                  <span>04</span>
                  <div>
                    <strong>Budget and KPI targets</strong>
                    <small>What to spend and how to judge the result.</small>
                  </div>
                </li>
              </ol>
              <p className="roadmap-empty-note">
                Typical output: a 90-day roadmap with 4 phases and a clear
                go / no-go test.
              </p>
            </aside>
          ) : (
            <aside className="roadmap-result" ref={resultRef}>
              <div className="roadmap-result-inner">
                <div className="roadmap-result-head">
                  <span className="roadmap-result-label">Recommended path</span>
                  <span className="pill pill--ember">{plan.tag}</span>
                </div>

                <h3
                  className="roadmap-result-title"
                  ref={resultHeadingRef}
                  tabIndex={-1}
                >
                  {plan.title}
                </h3>
                <p className="roadmap-result-copy">{plan.diagnosis}</p>

                <div className="roadmap-lever">
                  <span>Primary lever</span>
                  <strong>{plan.lever.title}</strong>
                  <p>{plan.lever.copy}</p>
                </div>

                <ol className="roadmap-phases">
                  {plan.phases.map((phase, index) => (
                    <li className="roadmap-phase" key={phase.window}>
                      <span className="roadmap-phase-num" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="roadmap-phase-window">
                        {phase.window}
                      </span>
                      <h4>{phase.title}</h4>
                      <p>{phase.summary}</p>
                    </li>
                  ))}
                </ol>

                <div className="roadmap-metrics">
                  {plan.metrics.map((metric) => (
                    <div className="roadmap-metric" key={metric.label}>
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="roadmap-notes">
                  <p>
                    <strong>Budget rule.</strong> {plan.budgetRule}
                  </p>
                  <p>
                    <strong>90-day focus.</strong> {plan.focus}
                  </p>
                  <p className="roadmap-note">
                    <strong>Next checkpoint.</strong> {plan.note}
                  </p>
                </div>

                <a
                  className="btn btn--ember btn--full"
                  href={buildMailto(answers, plan)}
                >
                  Send me this roadmap
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </a>
                <button
                  type="button"
                  className="roadmap-text-btn"
                  onClick={startOver}
                >
                  Run the questions again
                </button>
                <p className="form-note">
                  Opens your email app with your answers and plan pre-filled.
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
