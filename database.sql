CREATE TABLE todos(
	id SERIAL PRIMARY KEY,
	task TEXT NOT NULL,
	status VARCHAR (20) NOT NULL DEFAULT 'incomplete',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

INSERT INTO "todos" ("task") VALUES ('Take the bacon away from the dog. If he does not like that idea, send him to whole foods and show him the vegetable bacon.');
INSERT INTO "todos" ("task") VALUES ('Put a lemon back in the waffle maker');
INSERT INTO "todos" ("task", "status") VALUES ('Buy 2 pounds of fresh ground beef', 'complete');

SELECT * FROM "todos";
SELECT * FROM "todos" WHERE status='incomplete' ORDER BY status;
SELECT * FROM "todos" ORDER BY created_at DESC;
SELECT * FROM "todos" WHERE status='incomplete' ORDER BY created_at DESC;
SELECT * FROM "todos" ORDER BY status;
SELECT * FROM "todos" WHERE status='incomplete' ORDER BY completed_at DESC;

-- DELETE FROM todos WHERE id=2;