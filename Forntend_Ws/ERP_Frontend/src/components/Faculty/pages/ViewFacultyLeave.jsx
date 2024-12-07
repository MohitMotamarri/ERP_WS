import React, { useState, useEffect } from "react";
import axios from "axios";
import FacultyLayout from "../FacultyLayout";

const ViewFacultyLeave = () => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const facultyId = localStorage.getItem("id");
    axios
      .get(`http://localhost:8080/faculty/${facultyId}`)
      .then((response) => {
        setLeaves(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("No leaves found for this faculty.");
        } else {
          setError("An error occurred while fetching data.");
        }
      });
  }, []);

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "20px auto",
      background: "#ffffff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      marginTop: "20px",
      color: "#444",
    },
    error: {
      color: "red",
      textAlign: "center",
      fontSize: "1.2em",
      marginTop: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      backgroundColor: "#f4f4f4",
      color: "#333",
      padding: "12px 15px",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "12px 15px",
      textAlign: "left",
    },
    rowEven: {
      backgroundColor: "#f9f9f9",
    },
    rowHover: {
      cursor: "pointer",
    },
    status: {
      approved: { color: "green", fontWeight: "bold" },
      pending: { color: "brown", fontWeight: "bold" },
      rejected: { color: "red", fontWeight: "bold" },
    },
  };

  return (
    <FacultyLayout>

    
    <div style={styles.container}>
      <h2 style={styles.heading}>Faculty Leaves</h2>
      {error ? (
        <p style={styles.error}>{error}</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Leave Type</th>
              <th style={styles.th}>Start Date</th>
              <th style={styles.th}>End Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.length > 0 ? (
              leaves.map((leave, index) => (
                <tr
                  key={index}
                  style={index % 2 === 0 ? styles.rowEven : undefined}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 0 ? "#f9f9f9" : "#ffffff")
                  }
                >
                  <td style={styles.td}>{index + 1}</td>


                   
                  <td style={styles.td}>{leave.reason}</td>
                  <td style={styles.td}>{leave.startDate}</td>
                  <td style={styles.td}>{leave.endDate}</td>
                  <td
                    style={{
                      ...styles.td,
                      ...(leave.status === "Approved"
                        ? styles.status.rejected
                        : leave.status === "Pending"
                        ? styles.status.pending
                        : styles.status.accepted),
                    }}
                  >
                    {leave.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={styles.td} colSpan="5">
                  No leave records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
    </FacultyLayout>
  );
};

export default ViewFacultyLeave;
