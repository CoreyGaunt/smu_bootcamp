

Sub StockTracker():

'' created variables to use in my script

Dim yearly_change As Double
Dim percent As Double
Dim total_vol As Double
Dim target_range As Long
Dim last_row As Long

'' Set range variables - I have done this so I do not have to worry
'' about row count in the spreadsheet

target_range = ActiveSheet.UsedRange.rows.Count

'' The code below is used to Title the spreadsheet with our new
'' Columns

Cells(1, 9).Value = "Ticker"
Cells(1, 10).Value = "Yearly Change"
Cells(1, 11).Value = "Percent Change"
Cells(1, 12).Value = "Total Stock Volume"
Cells(2, 14).Value = "Greatest % Increase"
Cells(3, 14).Value = "Greatest % Decrease"
Cells(4, 14).Value = "Greatest Total Volume"
Cells(1, 15).Value = "Ticker"
Cells(1, 16).Value = "Value"

'' Range for specific document
'' I have set it as 2 to target_range so that I will never have to
'' adjust the range to match the sheet - it will simply conform
'' to the sheet it is using!

For i = 2 To target_range

    '' The below variables take place for basic formulas
    ''
    '' track ticker name, change in a year, percent difference, and
    '' total volume
    
    ticker = Cells(i, 1).Value
    yearly_change = Cells(i, 3).Value - Cells(i, 6).Value
    percent = (yearly_change / Cells(i, 3).Value)
    total_vol = Cells(i, 6).Value * Cells(i, 7).Value

    '' The below lines place the values calculated in the above
    '' block into the worksheet
    '' This will populate our Ticker, Yearly Changed, Percent Changed
    '' and Total Stock Volume columns
    
    Cells(i, 9).Value = Cells(i, 1).Value
    Cells(i, 10).Value = yearly_change
    Cells(i, 11).Value = FormatPercent(percent, [2])
    Cells(i, 12).Value = total_vol
    
    '' This section is used to handle conditionally formatting
    '' Color Index for Green = 4
    '' Color Index for Red = 3
    
    If Cells(i, 11).Value >= 0 Then
    
        Cells(i, 11).Interior.ColorIndex = 4
        
    Else
    
        Cells(i, 11).Interior.ColorIndex = 3
        
    End If

Next i
    
End Sub
