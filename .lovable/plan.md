# Fix the 65 open review comments

There are 65 open comments, from Nishanth Shetty (codes ADC, AC, FC, SC) and the CEO. I'll handle them in five rounds, starting with quick fixes. After each round I'll reply on every comment it covers.

## Round 1: quick renames, removals and look fixes (about 25 comments)
- **Renames:** "Admin" becomes "Administration" (ADC-1). "Admission" becomes "Sales" in menus and headings (SC-2). Admin "Attendance" becomes "Student Academic Details" with a student icon (ADC-11, ADC-10). "Faculty" becomes "Assigned Faculty" (ADC-26). The batches link becomes "Faculty Request" (ADC-25). Academic "Syllabus" becomes "My Class Schedule" (AC-7).
- **Removals:**
  - Academic tabs: Schedule (AC-3), History (AC-10) and Attendance (AC-9; attendance moves into the notes view in Round 3).
  - The repeated section on the Sales home (CEO).
  - The top block on Directors > Departments (CEO).
  - The section the CEO flagged on department dashboards, removed from every one of them (CEO, Finance).
  - The two repeated blocks on the Sales application page (SC-1, SC-2).
  - The 3 cards on Exam Requests (ADC-13).
  - "Sample/demo data" notices everywhere (AC-17).
- **Look fixes:**
  - Pop-up windows get a solid dark background in Admin and Finance (CEO batches pop-up, FC-3).
  - Finish the theme on every remaining page (CEO "colour pending").
  - Fix the font and style on Admin > Leave (ADC-21).
  - Put the "Administration" title inside the top bar (ADC-2, layout part).

## Round 2: Administration (about 17 comments)
- Dashboard:
  - Exam status card showing total, pending and completed exams (ADC-17).
  - Upcoming exams move here from Exam Requests (ADC-12).
  - A Faculty Request button with a pop-up that lists request details (ADC-25).
- Hovering a person's name shows a profile details card, on the Dashboard, Student Academic Details and Finance > Settings (ADC-23, ADC-7, FC-8).
- Student Academic Details:
  - Highlighted section headings (ADC-4).
  - "View Details" button (ADC-5).
  - Course status drop-down (ADC-9).
  - PDF export (ADC-8).
  - Cleaner layout with hover motion (ADC-6).
- Exam Requests:
  - Theory / Practical / Viva / All filter (ADC-16).
  - "View Details" linked to the exam schedule (ADC-15).
  - "Alter Schedule" button with an in-charge field (ADC-14).
- Leave: a status drop-down beside search with small charts (ADC-19, ADC-20). The table fits one screen with its own scrollbar, and page numbers are removed (ADC-18).
- Certificates: the 4 cards become filters that switch the table, with small charts (ADC-22).
- Batches: the analytics sit inside the calendar bar with hover motion (ADC-3).
- Generate Admission and Student Record (ADC-24):
  - "View Details" button.
  - Success pop-up.
  - Agreement visit scheduled automatically.
  - Upload agreement.
  - Generate credentials (User ID, Student ID, password, LMS link), shown in the record.
  - Credential history card.
  - Emails are shown as "ready to send" until email sending is set up (see Round 5).

## Round 3: Academic trainer portal (about 16 comments)
- Dashboard:
  - Shorter, with no repeats (AC-2).
  - Shows free hours, today's classes, completed modules and one exam/class reminder.
  - The 4 cards become small charts; details appear on hover (AC-1).
- My Class Schedule (the old Syllabus):
  - Tidy button row: History, Request Change, View Score, View Notes.
  - The MCQ / notes / assessment buttons become one coloured status drop-down.
  - Request Change disappears after it's sent and shows "Awaiting approval" (AC-5).
- Re-teach flow (AC-6):
  - The re-teach button shows only when the class score is below 75%.
  - After re-teaching, a "Resend assessment" button appears.
  - A reminder is added for the next class.
- View Notes inside the portal (AC-4, AC-9):
  - Notes download.
  - Live attendance cards: present, absent, late, leave, login and logout times, as sample biometric data.
- Module assessment button (AC-16): appears only after every topic is done, before "Module complete". It builds questions from the uploaded notes.
- Eligibility (AC-19): 90% attendance or more is eligible. Below 90% shows "Fine due" before the assessment is allowed.
- Examinations:
  - The 3 cards move to the course dashboard (AC-14).
  - Eligible / Not eligible drop-down (AC-12).
  - Hover motion and student-themed visuals (AC-13).
- Notifications are rebuilt around exam reminders and approval requests (AC-11).
- Profile: "Apply Leave" form (name, one reason paragraph, dates) that sends a request to Administration, with an Approved/Pending status (AC-15). It also appears in Administration > Leave.
- Notes: fill every module's notes list (AC-8), using sample notes until real ones are provided.
- Trainer-only view, with the profile next to the bell (AC-18). See the question about logins.

## Round 4: Finance (about 6 comments)
- Ledgers: better-looking dashboard with charts and motion (FC-2). Test bank statement upload and fix what breaks (FC-1).
- Fees: animated section headings (FC-5).
- Reports: charts plus tables with coloured headings (FC-7).

## Round 5: whole app
- A Save button in the top bar that saves everything and shows "Saved at hh:mm" (CEO).
- HR department sub-menus become Mac-style drop-downs (CEO).
- Directors: sub-menus move to a bottom dock, and the dashboard layout is fixed (CEO).
- The real logo goes in the top bar, once you send the file (CEO).

## Needs a decision from your team (I'll reply on these comments, not guess)
- FC-4 Fee concession flow ("discuss with Praneeth sir")
- FC-6 Fees structure ("verify with Admin")
- Real emails for credentials and agreements (needs email setup)
- Real logo file
- Real trainer logins for the trainer-only view

## Technical notes
- Everything stays saved in the browser, as now.
- Biometric, email and role features use sample data or a role switcher unless the logins question is answered "real logins".
- Commit after each round. Run `bunx vitest run` and take Playwright screenshots of the changed pages.

### Thread IDs
Round 1: 1dfe0dfe-bd06-49f6-b881-cee78324b463, 273ecc0d-d43f-4fd1-b1f6-74ca5b09f2ea, cf2050ca-2fb3-435e-a6a3-a709b34f8fc2, de452603-0132-41ca-b5ae-d3265113f0d2, c1826980-e3e9-4b1c-9829-3924b210180f, b071398b-3cc9-4c32-9dea-75bf50d8e865, abcc0d23-16ea-4a5f-a8dc-791953af7920, 837fcb2c-489b-4d33-a6f3-56beaeb869f1, d41d3068-e1f6-417c-ad7d-4a142fa1eeb7, 88c81182-9a00-4422-a8cd-f5964af8d81c, 99b2dc6c-ec42-415f-a061-6c456ac593a2, e8ac69f2-2ca7-4bbe-8f18-7af60e4b2eb9, af56ad4e-2eae-4426-8d0f-bed7b9b40ca8, ca9fd794-d03b-43fd-a50b-d6cb8370bb16, b2e09a2f-882a-4771-8a63-29e079d87d5b, c0eca712-b914-4cbc-b272-06b5e825ee4c, eb93f330-bb5e-4ee0-bd15-6639d1a219fe, 00f54cde-d716-4bb0-8686-bca572935d0d, cec39e13-86aa-444c-bab3-e94d52a7767b, 275376ac-0afc-40bc-ada2-330ea69331b9, d3dd8dce-69f9-4e29-8815-6dbf1f639bd1

Round 2: ccc1ebaa-8399-4fc3-b7d5-433c224d7a24, 5ed15ce8-42ea-4a21-be4d-03e64d5096f6, c8030307-8911-42a6-9937-198163c5cbd1, 13811bf1-ea18-410a-90bd-b7f4935a6fe7, 3c7f98bb-9bbd-40be-9a31-fbf37ab65c8a, 27fa0b1c-146d-4612-b5dc-a0a926d5487f, 2ac16e59-ad18-476a-8612-07119bca4195, f00861a2-0d9a-4299-a63c-b9c40446b63f, 5ad99eac-eee8-4e14-8e6e-b7c65a9ffe2a, e9735a2a-b766-4281-af22-f9f21650bf51, 71d3a2f0-7b14-4bc8-ae15-2bfd4551aff7, 5b9d231c-c682-4df9-a285-d3440f56d37a, aa15cb5e-6a2d-4088-bf65-12feb7a8a5c4, d75171e7-05f9-42eb-ab91-90d8ce2ca496, cccc37c3-8752-48cb-809e-f8665d191825, 393da345-9325-40fc-a0d5-46110cb9b959, d756e620-ca20-4137-ae53-22f15f084b7d, 75d958e6-f3a2-4892-9fe7-831eb8c64d22, 5138fc7b-214a-48c1-97c3-43d94f3811fb, 9c782815-47f6-4bd2-a1f1-c1448d4a9b92

Round 3: 251f1d43-c12e-43a5-9c9b-2aeceb77646d, 8d23e051-4591-4108-be08-767f9605ad12, 42d592f0-f395-4973-9a5f-a65eb999332f, bf0b7dac-95f8-4836-8594-781eed43f6b2, 0afa957c-5561-46cd-81f9-ba114bc97f1a, 52a45010-9be7-4196-8f1a-374204a34578, 2553d98e-e639-4423-81d0-2345d728ccde, a8b458b9-b9a4-4db3-8b22-e62e848d538e, f30a81a8-f1f0-4dfe-b02f-9a00072fcf03, 6ec50102-87bc-465d-b401-57276e3369f4, d15e4ecf-9f9e-49c4-86d2-0f87e30d601b, 8a6bdc1d-30e8-44d3-be95-4f40c1e41063, 860dfe5f-7f6b-44d0-9d1b-ca58cf2095e6, be731948-f7c9-42b9-ab58-5b0e658053bf

Round 4: e81b3c76-0996-4fff-9cf1-06dfb93d3ade, 831fe4be-b58b-4e46-b77e-0c15ddc91522, 67cf736d-ab6f-4f76-998a-50b9f7773f21, 451cd6e6-231b-49ea-80d7-f91989c8c522

Round 5: 59f349e4-8154-4f42-858a-f2b1ba0875a1, 757fa99c-cf0c-4329-b75f-c67f8206f810, d1be3b44-02ca-4793-ae74-ea324efe7905, baba88e9-09e4-4bfc-82ef-42b9a503b5b5

Needs decision: 397cd173-e7ad-4685-b327-98720f45a058, 63a1b006-7602-4706-ae72-865461308aaa
